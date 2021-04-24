import React, {useEffect, useState} from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import './prime_table.css';

export const Primetable =  (props) => {
  
    const [primes, setPrimes] = useState([]);       //state variable to store prime numbers
    const [no_primes, setNo_Primes] = useState(10); //state variable input of user

    //Prime number checker
    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false; 
        return num > 1;
    }
     
    //Prime number algorithm
    const display = (n) => {
        var arr = [2];
        for ( var i = 3; i < 1000; i+=2 ) {
            if ( isPrime(i) ) {
                arr.push(i);
            }
            if (arr.length>=n){

                break
            }
        }
       
        setPrimes(arr)
    }
            
    //Lifecyle hook to generate new prime numbers on input change
    useEffect(() => {
            display(no_primes);  
    }, [no_primes]);


    //data input to the table 
    const dap = []
    primes.forEach( i  => {
        const da = {}
        primes.forEach(j => {
            da[j] = i*j
        })
        dap.push(da)
    })

   
    //code to generate index and headers for the table.
    const heads = []
    primes.forEach(i=>{
        heads.push({Header:`${i}`,
        accessor:`${i}`,
        Cell: row => (
            <div
              style={{
                width: '75%',
                height: '100%',
                backgroundColor: '#dadada',
                borderRadius: '2px'
              }}
            >
            {row.value}
            </div>
          )})
    })
  
    //column data for table
    const col = [   
        {
            Header: "",
            id: "row",
            maxWidth: 50,
            filterable: false,
            Cell: (row) => {
                return <div >{primes[row.index]}</div>;
            }
            },
            // {Header:'2',accessor: '2'},
            // {Header:'3',accessor: '3'},
            // {Header:'5',accessor: '5'},
            // {Header:'7',accessor: '7'},
            ...heads
        ]


    const handleChange = (event)=>{
            setNo_Primes(event.target.value)
        }
           
                
return (
    <div> 
           <input
                className='search-box'
                type='number'
                placeholder='number of primes'
                onChange={handleChange}
                defaultValue={10}
            />

        <div className='card-list'>

            <ReactTable 
                data={dap}
                columns={col}
            />
        </div>
    </div>
    );
}
