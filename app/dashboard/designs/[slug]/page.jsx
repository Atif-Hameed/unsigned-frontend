'use client';

import Carelabel from '@/components/dashboard/forms/order-forms/Carelabel';
import Colourway from '@/components/dashboard/forms/order-forms/Colourway';
import Delivery from '@/components/dashboard/forms/order-forms/Delivery';
import Fabric from '@/components/dashboard/forms/order-forms/Fabric';
import Fit from '@/components/dashboard/forms/order-forms/Fit';
import Necklabel from '@/components/dashboard/forms/order-forms/Necklabel';
import Packaging from '@/components/dashboard/forms/order-forms/Packaging';
import Print from '@/components/dashboard/forms/order-forms/Print';
import Qunatity from '@/components/dashboard/forms/order-forms/Qunatity';
import { MyContext } from '@/components/provider/context-provider';
import Stepper from '@/components/shared/Stepper';
import { validateColoursForm, validateFabricForm, validateNeckLabelForm, validateQuantityForm } from '@/utils/validations';
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore'; // Import Firebase Firestore methods
import { db } from '@/config/firebase-config'; // Firebase config

const Page = () => {
  const { formData, setFormData, resetForm } = useContext(MyContext); // Use context for form data management
  const pathname = usePathname(); // Get the current pathname
  const [id, setId] = useState(null); // Order ID state

  // Extract order ID from URL
  useEffect(() => {
    if (pathname) {
      const pathParts = pathname.split('/');
      const orderId = pathParts[pathParts.length - 1];
      setId(orderId);
    }
  }, [pathname]);


  useEffect(() => {
    resetForm()

  }, [id])

  // Fetch order data from Firestore
  useEffect(() => {
    const fetchOrderData = async () => {
      if (id) {
        try {
          // Get the order document from Firestore using the order ID
          const docRef = doc(db, 'orders', id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const orderData = docSnap.data();
            // Update formData in context with fetched order data
            setFormData((prevFormData) => ({
              ...prevFormData,
              ...orderData,
            }));
            // console.log('Order data fetched:', orderData);
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching order data:', error);
        }
      }
    };

    fetchOrderData();
  }, [id, setFormData]); // Dependency array includes id and setFormData

  return (
    <div className='w-full flex justify-center'>
      <Stepper
        orderID={id}
        fitForm={<Fit />}
        fabricForm={<Fabric />}
        colourwayForm={<Colourway />}
        necklabelForm={<Necklabel />}
        carelabelForm={<Carelabel />}
        printForm={<Print />}
        packagingForm={<Packaging />}
        qunatityForm={<Qunatity />}
        deliveryForm={<Delivery />}
        validateFabricForm={() => validateFabricForm(formData, setFormData)}
        validateColorsForm={() => validateColoursForm(formData, setFormData)}
        validateNecklabelForm={() => validateNeckLabelForm(formData, setFormData)}
        validateQuantityForm={() => validateQuantityForm(formData, setFormData)}
      />
    </div>
  );
};

export default Page;
