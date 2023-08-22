
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { CartProvider } from '../../context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

test('Prop is passed correctly', ()=>{
    render(
        <BrowserRouter>
         <App greeting={'Catálogo de productos:'}/>
        </BrowserRouter>
   
    )
    
    expect(screen.getByText(/Catálogo de productos:/i)).toBeInTheDocument()
})



test('Ingresa el nombre em Login.js y se muestra en pantalla en NavBar.js', async () => {
  render(
    <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CartProvider>


  );


  //Primero conviene borrar los inputs:
  userEvent.clear(screen.getByPlaceholderText(/nombre y apellido/i));
  userEvent.clear(screen.getByPlaceholderText(/telefono/i));
  userEvent.clear(screen.getByPlaceholderText(/email/i));
  userEvent.clear(screen.getByPlaceholderText(/confirmar email/i));

  //Luego se rellenan
  userEvent.type(screen.getByPlaceholderText(/nombre y apellido/i), 'Valeria');
  userEvent.type(screen.getByPlaceholderText(/telefono/i), '1121714493');
  userEvent.type(screen.getByPlaceholderText(/email/i), 'va@gmail.com');
  userEvent.type(screen.getByPlaceholderText(/confirmar email/i), 'va@gmail.com');

  //y se clickea el botón 
  userEvent.click(screen.getByTestId('login'));



  expect(
    await waitFor(() => screen.findByText(/Valeria/i), { timeout: 3000 })
  ).toBeInTheDocument();
});
