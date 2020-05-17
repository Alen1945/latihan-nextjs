import Head from "next/head";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Home, AccountBox } from "@material-ui/icons";
import { cyan } from "@material-ui/core/colors";
export default function Layout(props) {
  return (
    <div className="container-layout">
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar className="appbar" elevation={2}>
        <Toolbar>
          <Typography variant="h6" className="title">
            Latihan Next.js
          </Typography>
          <div className="grow"></div>
          <div className="section-toolbar">
            <IconButton>
              <Home className="btn-nav" />
            </IconButton>
            <IconButton>
              <AccountBox className="btn-nav" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {props.children}

      <style jsx>
        {`
          .container-layout :global(.title) {
            font-weight: bold;
            color: ${cyan[400]};
          }
          .grow {
            flex-grow: 1;
          }
          .section-toolbar {
            display: flex;
          }
          .container-layout :global(.appbar) {
            background-color: #fff;
          }
          .container-layout :global(.btn-nav) {
            color: ${cyan[400]};
          }
        `}
      </style>
    </div>
  );
}
