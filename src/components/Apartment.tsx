import { useState } from "react";
import { apartments } from "./apartmentData";
import { FormEvent } from 'react';

const Apartment: React.FC = () => {
    const [filteredApart, setFilteredApart] = useState(apartments);
    const [searchQuery, setSearchQuery] = useState('');
 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    } 
    
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const filteredData = apartments.filter((apartment) => {
            return apartment.numOfBedrooms.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setFilteredApart(filteredData);     
    }

    const numOfApartFound = () => {
        const filteredData = apartments.filter((apartment) => {
            return apartment.numOfBedrooms.toLowerCase().includes(searchQuery.toLowerCase());
        });
        if (filteredData) {
            const apartmentFound = filteredApart.length;
            return apartmentFound;
        }
    }

    const numOfBedroomsSearch = () => {
        if (searchQuery) {
            const bedroomsFound = searchQuery;
            return bedroomsFound;
        } else {
            const bedroomsFound = 'different';
            return bedroomsFound;
        }
    }

    return (
        <main>
            <section className="relative mt-20 px-10">
                <h2 className="text-white text-center text-2xl md:text-3xl pb-2 font-semibold">Which Apartment suits your need?</h2>
				<p className="text-lg text-center text-slate-900 md:w-[420px] md:mx-auto lg:w-[460px]">
                    Entering a <strong>number of bedrooms</strong> required,  apartments that meet the criteria will be displayed or an appropriate message if no such apartments are available.
                </p>
                <form
                    onSubmit={handleSubmit} 
                    className="flex items-center justify-center my-6 w-full"
                >
		            <p>
		                <input 
                            type="number"
                            value={searchQuery}
                            onChange={handleChange}
                            role="textbox"
                            className="w-[50px] text-xl text-center p-1 pb-2 mr-1 border border-gray-300 rounded-md focus:border-gray-300 font-medium" 
                        />
                        <button 
                            type="submit" 
                            className="bg-blue-900 text-white w-20 pt-1.5 pb-2 px-2 ml-1 hover:bg-indigo-700 rounded-md">
                                Search
                        </button>
                    </p>
		        </form>
                <p className="w-auto sm:w-80 bg-orange-700 text-white text-center text-xl mx-auto p-4 pt-3 mb-6 rounded-md">We have <strong>{numOfApartFound()}</strong> apartments to rent with {numOfBedroomsSearch()} bedrooms</p>
                <div className="max-w-2xl min-w-full mx-auto px-10 flex md:flex-row flex-wrap justify-center md:px-20 lg:px-40 xl:px-60">
                    {filteredApart.map((apartment) => (
                        <div key={apartment.apartmentNum} className="bg-white w-[190px] flex flex-col justify-center text-left my-2 mx-auto p-4 border-2 border-slate-400 rounded-lg block">
                            <p className="">Apartment Nº: <strong>{apartment.apartmentNum}</strong></p>
                            <p className="text-orange-700 font-medium">Nº of Bedrooms: <strong>{apartment.numOfBedrooms}</strong></p>
                            <p className="">Nº of Bathrooms: <strong>{apartment.numOfBaths}</strong></p>
                            <p className="">Rent Amount: <strong>${apartment.rentAmount.toLocaleString()}</strong></p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Apartment;