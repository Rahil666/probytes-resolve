import React from 'react'
import { BASEPATH } from "@/config";
import Head from 'next/head';

export default function AllPort({PortPageData}) {
    // console.log("PortPageData" , PortPageData)
    if (PortPageData?.data?.portfolio !== null) {
  return (
   <>
   <Head>
   <title>{PortPageData?.data?.portfolio?.seo?.title}</title>
        <meta property="og:title" content={PortPageData?.data?.portfolio?.seo?.title} />
        <meta name="description" content={PortPageData?.data?.page?.portfolio?.metaDesc} />
        <meta property="og:description" content={PortPageData?.data?.portfolio?.seo?.metaDesc} />
        <link rel="canonical" href={`https://www.probytes.net${PortPageData?.data?.portfolio?.slug}`} />
       <link rel="stylesheet" href={`https://wp.probytes.net/wp-content/uploads/elementor/css/post-${PortPageData?.data?.portfolio?.portfolioId}.css`} media="all" />
   </Head>
        <div className="innerpages-contentsdata">
          {PortPageData?.data?.aboutus?.content !== null &&
            <div dangerouslySetInnerHTML={{ __html: `${PortPageData?.data?.portfolio?.content}` }}></div>
          }
        </div>
   </>
  )
    }
}


// ----------------getStaticPaths---------------------------

export async function getStaticPaths() {
    // Get Pages data
    const portlist = await fetch(`${BASEPATH}graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query NewQuery {
            portfolioes {
              nodes {
                slug
              }
            }
          }
            `
      })
    });
  
    const portdata = await portlist.json();
  
  
    //pages loop
    const paths = portdata.data.portfolioes.nodes.map((page) => ({
      params: { portslug: page.slug },
    }));
  
    return {
      paths: paths,
      fallback: 'blocking'
    };
  }
  
  // ----------------getStaticProps---------------------------
  
  export async function getStaticProps({ params }) {
    // Get page data
    const portsingle = await fetch(`${BASEPATH}graphql`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
           
            query NewQuery {
                portfolio(id: "${params.portslug}", idType: URI) {
                slug
                portfolioId
                title
                uri
                content
                seo {
                  metaDesc
                  title
                }
                
              }
            }
            `
        })
      });
  
  
    const PortPageData = await portsingle.json();
  
    return {
      props: {
        PortPageData,
        isSingleDetailedPage: true
      },
      revalidate: 10,
    }
  }