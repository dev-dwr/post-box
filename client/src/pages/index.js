import React from "react";
import { Layout } from "../components/Layout"
import {DataForm} from '../components/DataForm'
import {Posts} from "../components/Posts/Posts"
const Index = () => (
  <Layout>
    <DataForm/>
    <Posts/>
  </Layout>
)

export default Index
