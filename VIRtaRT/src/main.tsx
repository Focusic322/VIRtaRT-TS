import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import DoctorInformation from './Components/DoctorInformation.tsx'
import ServiceInformation from './Components/ServiceInformation'
import ShowInfo from './Components/ShowInfo.tsx'
import './index.css'
import AboutUs from './Pages/AboutUs.tsx'
import Doctors from './Pages/Doctors.tsx'
import Pathologies from './Pages/Pathologies.tsx'

const rootElement = document.getElementById('root')

if (rootElement) {
	createRoot(rootElement).render(
		<BrowserRouter basename='/'>
			<Routes>
				<Route path='/' element={<App />}></Route>
				<Route path='/aboutUs' element={<AboutUs />}></Route>
				<Route path='/doctors' element={<Doctors />}></Route>
				<Route path='/pathologies' element={<Pathologies />}></Route>
				<Route path='/doctors/:id' element={<DoctorInformation />} />
				<Route path='/service/:id' element={<ServiceInformation />} />
				<Route path='/service-details/:id' element={<ShowInfo />} />
				<Route path='*' element={<App />}></Route>
			</Routes>
		</BrowserRouter>
	)
}
