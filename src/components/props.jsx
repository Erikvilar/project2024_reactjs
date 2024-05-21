export const Content = ({ text, link }) => {
    return (
      <div className="first-content">
  
        <div>
          <p>{text}</p>
        </div>
        <Images link={link} />
  
  
      </div>
    )
  };
  export const Section = (props) => {
    return (
      <section className="general-content" id={props.id}>
        <h3>{props.title}</h3>
  
      </section>
    )
  };
  export const Card = (props) => {
    return (
      <div className={props.class}>
        <img src={props.link} alt="" />
        <div className="card-content">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    )
  
  };
  export const Images = (props) => {
    return (
      <div className="autor">
        <img src={props.link} alt="" />
      </div>
    )
  };
  export const Attribute = ({ attribute, item }) => {
    return (<p>{item}<span>{attribute}</span></p>)
  }