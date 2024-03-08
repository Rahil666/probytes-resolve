import React from 'react'
import Head from 'next/head';
import { BASEPATH } from "@/config";


export default function AllPages({ singlepage }) {

  console.log("singlepage", singlepage)
  if (singlepage?.data?.page !== null) {
  return (
    <>
      <Head>
      <link rel="stylesheet" href="https://wp.probytes.net/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.27.0" media="all" />
     
        <title>{singlepage?.data?.page?.seo?.title}</title>
        <meta property="og:title" content={singlepage?.data?.page?.seo?.title} />
        <meta name="description" content={singlepage?.data?.page?.seo?.metaDesc} />
        <meta property="og:description" content={singlepage?.data?.page?.seo?.metaDesc} />
        <link rel="canonical" href={`https://www.probytes.net/${singlepage?.data?.page?.slug}/`} />
        <link rel="stylesheet" href={`https://wp.probytes.net/wp-content/uploads/elementor/css/post-${singlepage?.data?.page?.pageId}.css`} media="all" />
        <link rel="stylesheet" href={`https://wp.probytes.net/?page_id=2229`} media="all" />
        <link rel="stylesheet" href="https://wp.probytes.net/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.27.0" media="all" />
      </Head>
 
      <div className="innerpages-contentsdata">
          {singlepage?.data?.page?.content !== null &&
            <div dangerouslySetInnerHTML={{ __html: `${singlepage?.data?.page?.content}` }}></div>
          }
        </div>
    </>
  )
  }
  else {
        
    return(
        <>
         
           <h2 className='text-center'>Page Not Found</h2>
        </>
    )

}
}
// ----------------getStaticPaths---------------------------

export async function getStaticPaths() {
  // Get Pages data
  const pagesres = await fetch(`${BASEPATH}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
          query PagesListQuery {
            pages(first: 10) {
              nodes {
                pageId
                title
                slug
              }
            }
          }
          `
    })
  });

  const pagesdata = await pagesres.json();


  //pages loop
  const paths = pagesdata.data.pages.nodes.map((page) => ({
    params: { pageslug: page.slug },
  }));

  return {
    paths: paths,
    fallback: 'blocking'
  };
}

// ----------------getStaticProps---------------------------

export async function getStaticProps({ params }) {
  // Get page data
  const pagesres = await fetch(`${BASEPATH}graphql`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query PagesListQuery {
            page(id: "${params.pageslug}", idType: URI) {
              slug
              title
              uri
              pageId
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


  const singlepage = await pagesres.json();

  return {
    props: {
      singlepage,
      isSingleDetailedPage: true
    },
    revalidate: 10,
  }
}