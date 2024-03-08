import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/components/Layout";
import "@/styles/content.css";
import "@/styles/header.css";
import "@/styles/service.css";
import "@/styles/footer_sx_aq.css";
import "@/styles/globals.css";
import '@/styles/elemntorstyle.css'
import Layout from "@/components/Layout";
import React, { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js")
        .then((bootstrap) => {
          if (recentCarousel && odooCarousel) {
            // Initialize Bootstrap carousels here
            new bootstrap.Carousel(recentCarousel);
            new bootstrap.Carousel(odooCarousel);
          }
        })
        .catch((error) => {
          console.error("Error loading Bootstrap", error);
        });
    }
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
