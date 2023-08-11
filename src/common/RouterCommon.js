import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Service from "../service/Service";
import Reactjsx from "../service/Reactjsx";
import Litreals from "../service/Litreals"
import Watch from "../service/Watch"
import Inlinecss from "../service/Inlinecss"
import Conditions from "../service/Conditions"
import Component from "../service/Component";
import ExportImport from "../service/ExportImport";
import Mapping from "../service/Mapping";
import SpreadOperator from "../service/SpreadOperator";
import Destructuring from "../service/Destructuring";
import Hooks from "../service/Hooks";
import Form from "../service/Form";
import Contactus from "../service/ContactUs";
import Todo from "../service/Todo"
import Faq from "../service/Faq"


const RouterCommon = () =>{
    return(
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/service" Component={Service} />
            <Route path="service/react-jsx" Component={Reactjsx} />
            <Route path="service/litreals" Component={Litreals} />
            <Route path="service/component" Component={Component} />
            <Route path="service/watch" Component={Watch} />
            <Route path="service/inlinecss" Component={Inlinecss} />
            <Route path="service/Conditions" Component={Conditions} />
            <Route path="service/ExportImport" Component={ExportImport} />
            <Route path="service/mapping" Component={Mapping} />
            <Route path="service/spreadoperator" Component={SpreadOperator} />Hooks
            <Route path="service/destructuring" Component={Destructuring} />
            <Route path="service/hooks" Component={Hooks} />
            <Route path="service/form" Component={Form} />
            <Route path="contactUs" Component={Contactus} />
            <Route path="service/list" Component={Todo} />
            <Route path="faq" Component={Faq} />
        </Routes>
    )
}

export default RouterCommon;
