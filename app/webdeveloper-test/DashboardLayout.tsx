'use client'; // this directive should be at top of the file, before any imports.
import { GlassSection } from "../../components/glassSection/glassSection";
import classes from "./DashboardLayout.module.scss"
import { SvgHome, SvgLaptop, SvgWork } from "../../components/icons/index";

const menus = [
  { href: "/webdeveloper", title: "Home", icon: <SvgHome /> },
  { href: "/webdeveloper/portfolio", title: "Portfolio", icon: <SvgWork /> },
  { href: "/webdeveloper/profile", title: "Skill", icon: <SvgLaptop /> },
];

// This is a Client Component
export default function DashboardLayout({ children }) {
  return (
    <main className={classes.main}>
      <div className={classes.main__glass}>
        <GlassSection
          menus={menus}
        >
          <GlassSection.Title>Hello, wecome my world!</GlassSection.Title>
          <GlassSection.Body>{children}</GlassSection.Body>
        </GlassSection>
      </div>
    </main>
  );
}