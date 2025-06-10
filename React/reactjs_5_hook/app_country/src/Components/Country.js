export default function Country(props) {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card h-100">
        <img
          src={props.flag}
          alt={`${props.name} flag`}
          className="card-img-top"
          style={{ height: '180px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text"><strong>Capital:</strong> {props.capital}</p>
        </div>
      </div>
    </div>
  );
}
