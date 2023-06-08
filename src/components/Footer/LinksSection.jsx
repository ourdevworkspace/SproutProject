
const LinksSection = ({title, link1, link2, link3}) => {

  return (
      <div className='tablet:flex tablet:flex-col tablet:justify-between'>
          <h3 className="text-lg">{title}</h3>
          <div className="tablet:flex tablet:flex-col tablet:gap-2">
              <p>{link1}</p>
              <p>{link2}</p>
              <p>{link3}</p>
          </div>
      </div>
  )
}

export default LinksSection