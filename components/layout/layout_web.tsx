import { Fragment } from "react";
import { GlassSection } from "../glassSection/glassSection";
import classes from "./layout.module.scss";

function LayoutWeb(props) {
  return (
    <Fragment>
      <main className={classes.main}>
        <div className={classes.main__glass}>
          <GlassSection>
            <GlassSection.Title>
              ssss
            </GlassSection.Title>
            <GlassSection.Body>{props.children}</GlassSection.Body>
          </GlassSection>
        </div>
      </main>
    </Fragment>
  );
}
export default LayoutWeb;
