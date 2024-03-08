import React from 'react'
import Head from 'next/head'
import BlogLiveSiderBar from '@/components/BlogLiveRightBar'
import BlogLiveLeftBar from '@/components/BlogLiveLeftBar'
import { BASEPATH } from "@/config";

export default function AllBlog({ postsinglepage }) {

    if (postsinglepage?.data?.post !== null) {
        return (
            <>
                <Head>
                    <title>{postsinglepage?.data?.post?.seo?.title}</title>
                    <meta property="og:title" content={postsinglepage?.data?.post?.seo?.title} />
                    <meta name="description" content={postsinglepage?.data?.page?.seo?.metaDesc} />
                    <meta property="og:description" content={postsinglepage?.data?.post?.seo?.metaDesc} />
                    <link rel="canonical" href={`https://www.probytes.net/${postsinglepage?.data?.post?.slug}`} />
                    <link rel="stylesheet" href={`https://wp.probytes.net/wp-content/uploads/elementor/css/post-${postsinglepage?.data?.post?.pageId}.css`} media="all" />
                </Head>



                <div className='all-blog-inner'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <BlogLiveSiderBar />
                            </div>
                            <div className='col-lg-6'>
                                <div className="innerpages-contentsdata">
                                    {postsinglepage?.data?.post?.content !== null &&
                                        <div dangerouslySetInnerHTML={{ __html: `${postsinglepage?.data?.post?.content}` }}></div>
                                    }
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <BlogLiveLeftBar />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    } else {
        
            return(
                <>
                 
                   <h2 className='text-center'>Post Not Found</h2>
                </>
            )
        
    }
}




// ----------------getStaticPaths---------------------------

export async function getStaticPaths() {

    // Get signle post data
    const postsres = await fetch(`${BASEPATH}graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
          query PostDataQuery {
              posts {
                nodes {
                  title
                  slug
                }
              }
            }
          `
        })
    });





    const allposts = await postsres.json();
    // const AllSingleCat = await AllCatege.json();

    //posts loop
    const postspaths = allposts.data.posts.nodes.map((post) => ({
        params: { blogslug: post.slug },
    }));
    return {
        paths: postspaths,
        fallback: 'blocking'
    };
}

// ----------------getStaticProps---------------------------

export async function getStaticProps({ params }) {



    // Get Single post data
    const postres = await fetch(`${BASEPATH}graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query PostListQuery {
              post(id: "${params.blogslug}", idType: URI) {
                postId
                title
                slug
                seo {
                  metaDesc
                  title
                }
                content
                date
                featuredImage {
                  node {
                    guid
                  }
                }
                
              }
            }
          `
        })
    });



    const postsinglepage = await postres.json();



    return {
        props: {
            postsinglepage,
            isSingleDetailedPage: true
        },
        revalidate: 10,
    }
}