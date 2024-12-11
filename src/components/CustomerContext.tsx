import React, {createContext, useState} from 'react';
import {Customer} from "../models/Customer.ts";

export const CustomerContext = createContext();

const CustomerContext ({children}) {

    const [customer, setCustomer] = useState<Customer[]>([])
    return (
        <div>
            <CustomerContext.Provider value={[customer, setCustomer]}>
                {children}
            </CustomerContext.Provider>
        </div>
    );
};