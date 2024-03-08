import React from 'react'
import Head from 'next/head';
import { BASEPATH } from "@/config";


export default function AllServices({ servicespage}) {

  
  if (servicespage?.data?.service !== null) {
  return (
    <>
      <Head>
        <title>{servicespage?.data?.service?.seo?.title}</title>
        <meta property="og:title" content={servicespage?.data?.service?.seo?.title} />
        <meta name="description" content={servicespage?.data?.page?.service?.metaDesc} />
        <meta property="og:description" content={servicespage?.data?.service?.seo?.metaDesc} />
        <link rel="canonical" href={`https://www.probytes.net${servicespage?.data?.service?.slug}`} />
        <link rel="stylesheet" href={`https://wp.probytes.net/wp-content/uploads/elementor/css/post-${servicespage?.data?.service?.serviceId}.css`} media="all" />
      </Head>
 
      <div className="innerpages-contentsdata">
          {servicespage?.data?.service?.content !== null &&
            <div dangerouslySetInnerHTML={{ __html: `${servicespage?.data?.service?.content}` }}></div>
          }
        </div>
    </>
  )
  }
 
}
// ----------------getStaticPaths---------------------------

export async function getStaticPaths() {
  // Get Pages data
  const serslist = await fetch(`${BASEPATH}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        services(first: 10) {
          nodes {
            serviceId
            slug
          }
        }
      }
          `
    })
  });

  const servicesdata = await serslist.json();


  //pages loop
  const paths = servicesdata.data.services.nodes.map((page) => ({
    params: { serviceslug: page.slug },
  }));

  return {
    paths: paths,
    fallback: 'blocking'
  };
}

// ----------------getStaticProps---------------------------

export async function getStaticProps({ params }) {
  // Get page data
  const servicessingle = await fetch(`${BASEPATH}graphql`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
         
          query NewQuery {
            service(id: "${params.serviceslug}", idType: URI) {
              slug
              serviceId
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


  const servicespage = await servicessingle.json();

  return {
    props: {
        servicespage,
      isSingleDetailedPage: true
    },
    revalidate: 10,
  }
}


