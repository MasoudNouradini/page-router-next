import { NewsListProps } from "../components/NewsList/types";
import NewsList from "../components/NewsList";
import { GetStaticPaths, GetStaticProps } from "next";

type SectionProps = { error?: string } & NewsListProps;

const Section = ({ list, error }: SectionProps) => {
  console.log("error", error);
  return <NewsList list={list} />;
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { section: "posts" } }, { params: { section: "users" } }],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  let list = [];
  try {
    const section = context.params?.section;

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${section}`
    );
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
export default Section;
