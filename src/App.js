
import './App.css';
import FetchData from './components/FetchDataFromApi';
import Lists from './components/RenderitemsListTotal';

import PackageList from './components/Packagelist';
import RenderedList from './components/rendereList';
import ShowData from './components/showData';
import Toggle from './components/Toggle';
import FormData from './components/SimpleFormData';
import Ref from './Hooks/useRefhooks';
import RefExplore from './Hooks/useRefAlertCounter';
import UseEffect from './Hooks/useEffectexplore';
import UseState from './Hooks/useStateexplore';
import FetchDataUseEffect from './Hooks/fetchDatawithUseEffect';
import ConditionalRendering from './conditionalyrender/condition';
import RouterComp from './ROUTES/Approuter';
import Productlist from './REDUX/Productlist';
import shoppingcart from './REDUX/shoppingcart';
import Shoppingcart from './REDUX/shoppingcart';
import Prop from './components/Props1';
import Search from './searchBar/search';
import DropDown from './searchBar/DropDown';
import Redux from './react-redux-tutorials';
import CountReduxToolkit from './REDUX-TOOLKIT/count';
import { EnhancedGreetingComponent } from './HigherOrderFunction/sampelComponente';
import { Route, Routes } from 'react-router-dom';
import FormsReact from './ReactForm/A11FormReact';
import ShowRecord from './ReactForm/A11showRecord';
import MainUseMemo from './Hooks/USEMEMOS.js';
import FormComponent from './ReactForm/B1FormdataUsingRotes';
import SubmittedData from './ReactForm/B11RoutesFormData';
import EditForm from './ReactForm/B11EditForm';
import FormUsingReuseable from './REACTFORM1/FORM.js';
import UseMemos, { FactorialCalculator } from './Hooks/USEMEMO.js';
import UseCallbacks1 from './Hooks/UseCallbackChild.js';
import ParentForwordRef from './Hooks/ForwordrefParent.js';
import ReactLifeCycle from './components/reactlifecycle.js';
import Accordians from './Accordians/accordian.jsx';
import TemperatureConverter from './StateLifting/withoutLifting.js';
import TemperatureConverterLifting from './StateLifting/withliftingup.js';
import ThemeSwitcher from './StateLifting/withliftinexample.js';
import RegisterationFormPureComPonent from './memoUseCase/memoUseCase.jsx';
import ParentComponentWithOutMemo from './memoUseCase/memoExamplsWithoutMemo.jsx';
import ParentComponentWithMemo from './memoUseCase/memoExamplsWithMemo.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Redux /> */}



        {/* find components using select options */}
        <DropDown />


        {/* special symbol in particler item */}
        <PackageList />

        {/* only chemist professions show */}
        <ShowData />


        {/* fetch data using useEffect with useState */}
        <FetchData />

        {/* delete list item onclick in button */}
        <Lists />


        {/* on off toggle  */}
        <Toggle />


        {/* practice on form with inputs */}
        <FormData />


        <Ref />
        <RefExplore />



        <UseEffect />
        <UseState />
        <FetchDataUseEffect />



        {/* explore routes components */}
        <RouterComp />



        <Prop />
        <Search />

        <CountReduxToolkit />

        {/*for higher order components explore */}
        <EnhancedGreetingComponent name="Aman with HOC" />





        {/* //data send in from react form usings props */}


        <FormsReact />



        <Routes>
          {/* //formData send using routes */}

          <Route path="/" element={<FormComponent />} />
          <Route path="/submitted" element={<SubmittedData />} />
          <Route path="/edit" element={<EditForm />} />
          {/* Add the EditForm route */}
        </Routes>




        {/* <FormUsingReuseable /> */}




        <UseCallbacks1 />


        <MainUseMemo />


        <UseMemos />
        <FactorialCalculator />

        <ParentForwordRef />

      </header>

      <ReactLifeCycle />

      <Accordians />
      <TemperatureConverter />
      <TemperatureConverterLifting />
      <ThemeSwitcher />

      <RegisterationFormPureComPonent />
      <ParentComponentWithOutMemo />
      <ParentComponentWithMemo />
    </div>
  );
}

export default App;


// Do you know why React components need to start with capital letters?

// It's because a React component is written in JSX, which internally translates to a react.createElement API. This createElement function is then transformed into a plain JavaScript object, a fundamental data structure which is known as React Fiber. This entire process occurs due to Babel.

// Babel takes the component and converts it into a React Fiber object. When Babel encounters a name starting with a capital letter, it recognizes it as a reference rather than a string. On the contrary, everything else is converted into a string by Babel.
