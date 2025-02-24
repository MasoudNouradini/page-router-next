import NewsList from "../components/NewsList";
import { NewsListProps } from "../components/NewsList/types";
import { GetServerSideProps } from "next";
import React from "react";

type HomePageProps = { error?: string } & NewsListProps;

const HomePage = ({ list, error }: HomePageProps) => {
  console.log("error :", error);
  return <NewsList list={list} />;
};

export const getStaticProps: GetServerSideProps = async () => {
  let list = [];
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const responseData = await response.json();

    return {
      props: {
        list: responseData
      }
    };
  } catch (error) {
    return {
      props: {
        list: [],
        error: "server Error"
      }
    };
  }
};
export default HomePage;
