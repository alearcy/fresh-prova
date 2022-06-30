/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  const {params } = props;
  return <div>Hello {params.name}</div>;
}
