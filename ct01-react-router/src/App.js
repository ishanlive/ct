import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  Navigate,
  useNavigate
} from "react-router-dom"
import React from 'react';
import UserHome from './component/UserHome';
import UserDashboard from './component/UserDashboard';
import UserLogin from './component/UserLogin';
import Counter from './component/Counter/Counter';
import AuthLogin from './component/Authentication/AuthLogin';
import ReqRes from './component/api/ReqRes';
import ReqresLogin from './component/api/ReqresLogin';



function App() {
  const customers = [
    { id: '1', name: 'Robin' },
    { id: '2', name: 'Sarah' }
  ]

  const userSignedIn = { id: 1, name: 'Robin' }
  //const userSignedIn = null

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='dashboard' element={<Dashboard />}></Route>
          <Route path='users' element={<Users />}>
            <Route path='paid' element={<PaidUsers />}></Route>
            <Route path='free' element={<FreeUsers />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Route>
          <Route path='login' element={
            userSignedIn ? (
              <Navigate replace to='/Dashboard' />) : (
              <Login />
            )
          }>
          </Route>
          <Route path='nestedRoutes' element={<NestedRoutes />}>
            <Route path='dynamicNestedRoutes' element={<DynamicNestedRoutes />}></Route>
          </Route>
          <Route path='customers' element={<Customers customers={customers} />}>
            <Route path=':customerId' element={<Customer />}></Route>
          </Route>
          <Route path='redirect' element={<Redirect />}>
            <Route path='navigateComponent' element={<NavigateComponent />}></Route>
            <Route path='useNavigateHook' element={<UseNavigateHook />}></Route>
          </Route>
          <Route path='userHome' element={<UserHome />}></Route>
          <Route path='userDashboard' element={<UserDashboard />}></Route>
          <Route path='userLogin' element={<UserLogin />}></Route>
          <Route path='ExampleUseReducerHook' element={<Counter />}></Route>
          <Route path='authLogin' element={<AuthLogin />}></Route>
          <Route path='reqres' element={<ReqRes />}>
            <Route path='reqresLogin' element={<ReqresLogin />}></Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/customers'>Customers</Link>
        </li>
        <li>
          <Link to='/nestedRoutes'>Nested Routes</Link>
        </li>
        <li>
          <Link to='/redirect'>Redirects</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/userHome'>User Home</Link>
        </li>
        <li>
          <Link to='/ExampleUseReducerHook'>Example useReducer Hook</Link>
        </li>
        <li>
          <Link to='reqres'>Req-Res</Link>
        </li>
      </ul>
    </nav>
  )
}

function Home() {
  const navigating = useNavigate()
  return (
    <>
      <h2>Home</h2>
      <Link to='userDashboard'>Dashboard</Link>

      <button onClick={() => {
        navigating('authLogin')
      }}>Login</button>

    </>
  )
}

const About = () => {
  const shouldRedirect = false;
  return (
    <>
      <h2>About</h2>
      {shouldRedirect && <Navigate replace to='/' />}
    </>)
}

function Users() {

  return (
    <>
      <h2>Users</h2>
      <nav>
        <ul>
          <li>
            <Link to='/users/paid'>Paid Users</Link>
          </li>
          <li>
            <Link to='/users/free'>Free Users</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

function PaidUsers() {
  return (
    <h2>Paid Users</h2>
  )
}

function FreeUsers() {
  return (
    <h2>Free Users</h2>
  )
}

function NestedRoutes() {
  return (<>
    <h2>Nested routes</h2>
    <p>While most people think React Router only routes a user from page to page,
      it also allows one to exchange specific fragments of the view based on the current route. </p>
    <p>Click anchor tag <a href='/nestedRoutes/dynamicNestedRoutes'>here</a> to know more about dynamic nested routes</p>
    <p>Click <Link to='/nestedRoutes/dynamicNestedRoutes'>here</Link> to know more about dynamic nested routes</p>
    <Outlet />
  </>)
}

function DynamicNestedRoutes() {
  return <>
    <h2>Dynamic Nested routes</h2>
    <p>In the next example for Nested Routes,
      we will start from a clean slate in the App component.
      This time we do not want to render static nested routes
      like we did before (e.g. /user/profile), but
      dynamic nested routes based on identifiers (e.g. /users/1 for showing the user
      who has the identifier 1 and therefore matches this route).
      So we will adjust our example from a single user route (/user)
      to a multi user route (/users). </p>
  </>
}

function Customers({ customers }) {
  return (
    <>
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <Link to={customer.id}>{customer.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  )
}

function Customer() {
  const { customerId } = useParams()
  return (
    <>
      <h2>Customer: {customerId}</h2>
      <Link to='/customers'>Back to Customers</Link>
    </>
  )
}

function Redirect() {
  return (
    <>
      <h2>Redirect</h2>
      <ul>
        <li>
          <Link to='navigateComponent'>REDIRECT WITH NAVIGATE COMPONENT</Link>
        </li>
        <li>
          <Link to='useNavigateHook'>REDIRECT WITH USENAVIGATE HOOK</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
}

function NavigateComponent() {
  const userSignedIn = { id: 1, name: 'Robin' }
  return (<>
    <h2>Navigate component</h2>
    <p>It should redirect to dashboard if the user is logged-in</p>
    <p>{userSignedIn && <Navigate replace to='/Dashboard' />}</p>
  </>)
}

function UseNavigateHook() {
  const navigate = useNavigate()
  const shouldRedirect = true;
  React.useEffect(() => {
    setTimeout(() => {
      shouldRedirect && navigate('/dashboard')
    }, 800)
  })
  return (
    <>
      <h2>UseNavigate hook</h2>
      <p>Redirecting to dashboard using <b>useNavigate()</b> hook...</p>
    </>
  )
}

function Login() {
  return (
    <>
      <h2>Login</h2>
    </>
  )
}

function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
    </>
  )
}

export function GreetingUser(props) {
  return <p>Hello {props.name}</p>
}

function NotFound() {
  return <h2>You have landed a page that doesn't exist.</h2>
}

export default App;

