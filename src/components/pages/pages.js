import React, {Component} from 'react';
import PageHeader from '../page-header';
import DietForm from "../diet-form";
import DietRecomendation from "../diet-recomendation";
import { Link } from 'react-router-dom';


class Diet extends Component {
   state = {
      result: null
   }

   updateResult = (value) => {
      this.setState((state) => ({ result: value }) )
   }

   render() {
       return (
          <div className="grid">
             <DietForm updateResult={this.updateResult}/>
             <DietRecomendation {...this.state}/>
          </div>
       )
   }
}

const DietPage = () => {
   return (
      <div className='container'>
         <PageHeader />
         <Diet />
      </div>
   )
}

const Error404Page = () => {
   return (
      <div className='container'>
         <PageHeader />
         <h2>Упс, что-то пошло не так.</h2>
         <p>
            Попробуйте обновить страницу, или перейти 
         </p>
         <Link to='/'>на главную</Link>
      </div>
   )
}


export {
   DietPage,
   Error404Page
};