import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";

import Button from "../../common/Button";

import * as S from "./styles";

const MiddleBlock = ({ last, id, title, content, button }) => {
  const { t } = useTranslation();

  return (
    <Fade bottom>
      <S.MiddleBlock last={last} id={id}>
        <Row justify="center">
          <Col lg={12} md={24}>
            <S.Title>{t(title)}</S.Title>
            <S.Content last={last}>{t(content)}</S.Content>
            {button ? (
              <Button name="submit" type="submit">
                {t(button)}
              </Button>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </S.MiddleBlock>
    </Fade >
  );
};

export default MiddleBlock;
