/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ClientInput from '../src/components/waiter/client';
import ProductsList from '../src/components/waiter/product'
import '@testing-library/jest-dom';


// describe('ClientInput', () => {
//     it('should call the onClientNameChange callback with the input value', () => {
//       const mockOnClientNameChange = jest.fn(); // Crear una función mock para el onClientNameChange
  
//       render(<ClientInput onClientNameChange={mockOnClientNameChange} />);
  
//       const inputElement = screen.getByPlaceholderText('Nombre del cliente');
  
//       const inputValue = 'Grace Hopper';
//       fireEvent.change(inputElement, { target: { value: inputValue } });
  
//       const saveButton = screen.getByText('Guardar'); // Asumiendo que hay un botón para guardar el nombre en el componente padre
//       fireEvent.click(saveButton);
  
//       expect(mockOnClientNameChange).toHaveBeenCalledWith(inputValue);
//     });
//   });


test('renders the ClientInput component correctly', () => {
  render(<ClientInput />);
  
  const inputElement = screen.getByPlaceholderText('Nombre del cliente');
  expect(inputElement).toBeInTheDocument();
});

test('input element is empty initially', () => {
  render(<ClientInput />);
  
  const inputElement = screen.getByPlaceholderText('Nombre del cliente');
  expect(inputElement).toHaveValue('');
});

test('typing updates the input value', () => {
  render(<ClientInput />);
  
  const inputElement = screen.getByPlaceholderText('Nombre del cliente');
  const testValue = 'John Doe';

  // Simulate typing the value
  userEvent.type(inputElement, testValue);

  expect(inputElement).toHaveValue(testValue);
});
describe('ProductsList', () => {
    const products: Product[] = [
      {
        id: '1',
        name: 'Product 1',
        price: 10,
        image: 'image-url',
        imageAlt: 'Product 1 Image',
        type: 'product-type',
        dateEntry: '2023-07-31',
        quantity: 10,
        href: '/product/1',
      },
    ];
  
    const mockOnSendToKitchen = jest.fn(); // Crear una función mock para onSendToKitchen verificar si es necesario
    it('should call onSendToKitchen when "Enviar cocina" button is clicked', () => {
  
      render(<ProductsList products={products} onSendToKitchen={mockOnSendToKitchen} />);
  
      const enviarCocinaButton = screen.getByText('Enviar cocina');
      fireEvent.click(enviarCocinaButton);
  
      expect(mockOnSendToKitchen).toHaveBeenCalled();
    });
  
    it('should update selected quantities when quantity select changes', () => {
      render(<ProductsList products={products} onSendToKitchen={() => {}} />);
  
      const quantitySelect = screen.getByLabelText('Cantidad 0'); // Assuming first product has initial quantity 0
      fireEvent.change(quantitySelect, { target: { value: '2' } });
  
      // Ensure that the selected quantity has changed to 2 for the first product
      const updatedQuantitySelect = screen.getByLabelText('Cantidad 2');
      expect(updatedQuantitySelect).toBeInTheDocument();
    });
  
    it('should calculate and display the correct total price', () => {
      render(<ProductsList products={products} onSendToKitchen={() => {}} />);
  
      // Assuming the price of the first product is 10 and quantity is 2 (set in previous test)
      const totalPriceElement = screen.getByText('Total:');
      expect(totalPriceElement).toHaveTextContent('20');
    });
  });