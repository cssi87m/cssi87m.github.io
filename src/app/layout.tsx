import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {default:"Dao Xuan Quang Minh | Robotics AI Engineer",template:"%s | Dao Xuan Quang Minh"},
  description:"Portfolio of Dao Xuan Quang Minh, a Robotics AI Engineer working across embodied robotics, multimodal AI, and research.",
  openGraph: {title:"Dao Xuan Quang Minh | Robotics AI Engineer",description:"Building intelligence that perceives, reasons, and acts.",type:"website"}
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader/>{children}<footer className="site-footer"><div className="shell footer-inner"><div><div className="wordmark">DXQM<span>.</span></div><p>Building intelligence that perceives, reasons, and acts.</p></div><div className="footer-links"><a href="mailto:daoxuanquangminh2004@gmail.com">Email ↗</a><a href="https://github.com/cssi87m" target="_blank" rel="noreferrer">GitHub ↗</a></div><small>© {new Date().getFullYear()} Dao Xuan Quang Minh</small></div></footer></body></html>;
}
