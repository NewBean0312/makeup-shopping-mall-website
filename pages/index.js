import Axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ItemList from "@/src/component/ItemList";
import styles from "@/styles/Home.module.css";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>NewBean</title>
        <meta name="description" content="NewBean 홈입니다."></meta>
      </Head>
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

// 정적 생성을 위한 코드
export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
