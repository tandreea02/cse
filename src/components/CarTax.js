import React, { useState } from "react";

function TaxValue(vehicleCapacity) {
    let sum = 0; //tax amount in ron
    if (vehicleCapacity > 3000) {
        sum = sum + ((vehicleCapacity) / 200) * 320;
    }
    if (vehicleCapacity > 2600) {
        sum = sum + ((vehicleCapacity) / 200) * 159;
    }
    if (vehicleCapacity > 2000) {
        sum = sum + ((vehicleCapacity) / 200) * 79;
    }
    if (vehicleCapacity > 1600) {
        sum = sum + ((vehicleCapacity) / 200) * 20;
    }
    if (vehicleCapacity > 0) {
        sum = sum + ((vehicleCapacity) / 200) * 8;
    }
    return +(Math.round( sum/5.1 + "e+2" ) + "e-2"); //turn ron to euro amount 
}

const CarTax = () => {

    const [vehicleTax,setVehicleTax] = useState(0.0);

    return (

        <div>
            <div className="">
                <input
                    type='number'
                    placeholder=' enter your number'
                    className="pr-2 pl-2 m-2 num-input"
                    min="1"
                    max="9000"
                    onChange={(event)=>{
                        setVehicleTax(TaxValue(parseInt(event.target.value)))
                    }}
                />
                <p>  The tax is {vehicleTax} €</p>
            </div>
        </div>
    )
}

export default CarTax;