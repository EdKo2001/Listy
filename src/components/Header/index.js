import React, { useState, Fragment } from "react";
import { Row, Col, Drawer } from "antd";
import { useTranslation } from "react-i18next";

import SvgIcon from "../../common/SvgIcon";

import * as S from "./styles";

const Header = () => {
  const [visible, setVisibility] = useState(false);
  const { t } = useTranslation();

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    return (
      <Fragment>
        <S.CustomNavLinkSmall activeClassName="current-page" to="/" exact>
          {t("Home")}
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall activeClassName="current-page" to="/about">
          {t("About")}
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall activeClassName="current-page" to="/blog">
          {t("Blog")}
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall activeClassName="current-page" to="/contact">
          {t("Contact")}
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <Col>
            <S.LogoContainer to="/">
              <SvgIcon src="logo.svg" />
            </S.LogoContainer>
          </Col>
          <S.NotHidden>
            <Col style={{ display: "flex", alignItems: "baseline" }}>
              <MenuItem />
            </Col>
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.OpenedOutline />
          </S.Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <S.Label onClick={onClose}>
              <Col span={12}>
                <S.Menu>Menu</S.Menu>
              </Col>
              <Col span={12}>
                <S.ClosedOutline padding />
              </Col>
            </S.Label>
          </Col>
          <MenuItem />
        </Drawer>
      </S.Container>
    </S.Header>
  );
};

export default Header;
