import { Helmet } from "react-helmet";

const HelmetComponent = (props) => {
    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name='description' content={props.description} />
            <meta property='og:title' content={props.title} />
            <meta property='og:description' content={props.description} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:title" content={props.title} />
        </Helmet>
    );
}

export default HelmetComponent;