const Header = (props) =>
  <div className="header">{props.name}s hemsida</div>

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.dogs.map(obj => <li>{obj.name}</li>)}
      </ul>
    </div>
  );
}

const Footer = (props) => {
  const companies = props.companies;
  return (
    <div>
      <ul>
        {companies.map(name => <li>{name}</li>)}
      </ul>
    </div>
  )
}


const HomePage = () => {
  const dogs = [{ name: "dog1" }, { name: "dog2" }, { name: "dog3" }]
  const companies = ["Volvo", "Ericsson", "H&M"]
  return (
    <>
      <Header name="Patrik" />
      <Content dogs={dogs} hell={12} hshsh={"hshsh"} />
      <Footer companies={companies} />
    </>
  )
}

export default HomePage;