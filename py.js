

const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];

const people1 = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];


const d=["a","b"]

const D=()=>{
  const ma=d.map((data)=><li>{data}</li>)
  return(
    <div>
      {ma}
    </div>
  )

}
const Data2=()=>{
const fil=people1.filter((person)=>person.profession === "chemist")
const listpepople= fil.map((person)=>(
    <p key="person.id">
        {person.name}
        {person.profession}
    </p>
))
    return(
        <div>
            {listpepople}
        </div>
    )
}


const d2 = [
  { id: 1, name: "Item 1", value: "Value 1" },
  { id: 2, name: "Item 2", value: "Value 2" },
];

const D2=()=>{
  const md=d2.map((d)=><li>{d.name}:{d.value}</li>)
  return(
    <div>
      {md}
    </div>
  )
}


const Data=()=>{
const listpepople=people.map((person)=><li>{person}</li>)
    return(
        <div>
            <ul>{listpepople}</ul>
        </div>
    )
}
