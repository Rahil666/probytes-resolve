import React from 'react'
import { BASEPATH } from "@/config";
import Head from 'next/head';

export default function AllAbout({AboutPageData}) {

  console.log("AboutPageData" , AboutPageData)
  if (AboutPageData?.data?.aboutus !== null) {
  return (
    <>
    <Head>
        <title>{AboutPageData?.data?.aboutus?.seo?.title}</title>
        <meta property="og:title" content={AboutPageData?.data?.aboutus?.seo?.title} />
        <meta name="description" content={AboutPageData?.data?.page?.aboutus?.metaDesc} />
        <meta property="og:description" content={AboutPageData?.data?.aboutus?.seo?.metaDesc} />
        <link rel="canonical" href={`https://www.probytes.net${AboutPageData?.data?.aboutus?.uri}`} />
        <link rel="stylesheet" href={`https://wp.probytes.net/wp-content/uploads/elementor/css/post-${AboutPageData?.data?.aboutus?.aboutusId}.css`} media="all" />
    </Head>

    <div className="innerpages-contentsdata">
          {AboutPageData?.data?.aboutus?.content !== null &&
            <div dangerouslySetInnerHTML={{ __html: `${AboutPageData?.data?.aboutus?.content}` }}></div>
          }
        </div>
    </>
  )
  }
}



// ----------------getStaticPaths---------------------------

export async function getStaticPaths() {
  // Get Pages data
  const aboutlist = await fetch(`${BASEPATH}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        aboutuses {
          nodes {
            slug
          }
        }
      }
          `
    })
  });

  const aboutdata = await aboutlist.json();


  //pages loop
  const paths = aboutdata.data.aboutuses.nodes.map((page) => ({
    params: { aboutslug: page.slug },
  }));

  return {
    paths: paths,
    fallback: 'blocking'
  };
}

// ----------------getStaticProps---------------------------

export async function getStaticProps({ params }) {
  // Get page data
  const aboutsingle = await fetch(`${BASEPATH}graphql`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
         
          query NewQuery {
              aboutus(id: "${params.aboutslug}", idType: URI) {
              slug
              aboutusId
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


  const AboutPageData = await aboutsingle.json();

  return {
    props: {
      AboutPageData,
      isSingleDetailedPage: true
    },
    revalidate: 10,
  }
}