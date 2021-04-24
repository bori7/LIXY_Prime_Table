import React, {useEffect, useState} from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import './prime_table.css';

export const Primetable =  (props) => {
  
    const [primes, setPrimes] = useState([]); 
    const [no_primes, setNo_Primes] = useState(10);

    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false; 
        return num > 1;
    }
            
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
        // console.log(arr); 
        setPrimes(arr)
    }
            
    useEffect(() => {
            display(no_primes);  
    }, [no_primes]);



    const dap = []
    primes.forEach( i  => {
        const da = {}
        primes.forEach(j => {
            da[j] = i*j
        })
        dap.push(da)
    })

    // console.log(dap)

    const heads = []
    primes.forEach(i=>{
        heads.push({Header:`${i}`,accessor:`${i}`})
    })
    // console.log(heads)

    const col = [   
        {
            Header: "",
            id: "row",
            maxWidth: 50,
            filterable: false,
            Cell: (row) => {
                return <div>{primes[row.index]}</div>;
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
                placeholder='number of prime numbers'
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
