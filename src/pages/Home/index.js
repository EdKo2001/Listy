import React from "react";

import ContactForm from "../../components/ContactForm";
import ContentBlock from "../../components/ContentBlock";
import MiddleBlock from "../../components/MiddleBlock";

import Introduction from "../../content/introduction.json";
import FirstBlock from "../../content/firstBlock.json";
import SecondBlock from "../../content/secondBlock.json";
import ThirdBlock from "../../content/thirdBlock.json";
import FourthBlock from "../../content/fourthBlock.json";
import ContactBlock from "../../content/contactBlock.json";

// const ContactForm = React.lazy(() => import('../../components/ContactForm'));
// const ContentBlock = React.lazy(() => import('../../components/ContentBlock'));
// const ScrollToTop = React.lazy(() => import('../../common/ScrollToTop'));
// const MiddleBlock = React.lazy(() => import('../../components/MiddleBlock'));
// const Container = React.lazy(() => import('../../common/Container'));

const Home = () => {
  return (
    <div>
      <MiddleBlock
        title={FirstBlock.title}
        content={FirstBlock.text}
        button={FirstBlock.button}
      />
        <ContentBlock
          type="right"
          first="true"
          title={Introduction.title}
          content={Introduction.text}
          button={Introduction.button}
          icon="developer.svg"
        />
        <ContentBlock
          type="left"
          title={SecondBlock.title}
          content={SecondBlock.text}
          section={SecondBlock.section}
          icon="graphs.svg"
        />
        <ContentBlock
          type="right"
          title={ThirdBlock.title}
          content={ThirdBlock.text}
          icon="product-launch.svg"
        />
        <ContentBlock
          type="left"
          title={FourthBlock.title}
          content={FourthBlock.text}
          icon="waving.svg"
        />
        <ContactForm title={ContactBlock.title} content={ContactBlock.text} />
    </div>
  );
};

export default Home;
