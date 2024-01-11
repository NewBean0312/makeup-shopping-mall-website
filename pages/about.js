import {
  Divider,
  Header,
  List,
} from "semantic-ui-react";

export default function about() {
  return (
    <div>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        회사 소개
      </Header>
      <div style={{ lineHeight: "23px", fontSize: "16px" }}>
        미감과 효능을 동시에 만족시키는 그럴싸한 화장품을 전문으로 하는
        쇼핑몰입니다.
        <br /> 고품질의 원료로 제작된 제품들은 피부에 부드럽게 마주하며 탁월한
        효과를 선사합니다.
        <br /> 다양한 브랜드와 제품 라인으로 고객들에게 다양한 선택지를
        제공하며, 합리적인 가격으로 뷰티를 추구하는 이들의 만족도를 높입니다.
        <br />
        트렌디하고 신뢰성 있는 뷰티 상품을 찾는 분들에게 최적의 쇼핑 경험을
        제공하는 곳입니다.
      </div>
      <Divider />
      <List>
        <List.Item>
          <List.Icon name="users" />
          <List.Content>JangDong Team</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>Daejeon</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a href="mailto:newbean0312@gmail.com">newbean0312@gmail.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="http://www.newbean-makeup.com">newbean-makeup.com</a>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
}
