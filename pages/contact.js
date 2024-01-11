import {
    Button,
    Divider,
    Form,
    Header,
    TextArea,
  } from "semantic-ui-react";
  
  export default function contact() {
    return (
      <div>
        <Header as="h3" style={{ paddingTop: 40 }} color="teal">
          문의 사항
        </Header>
        <Divider />
        <Form>
          <Form.Field>
            <label>제목</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label>내용</label>
            <TextArea />
          </Form.Field>
          <Button color="green">보내기</Button>
        </Form>
      </div>
    );
  }
  