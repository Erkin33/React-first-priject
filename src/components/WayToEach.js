export const WayToEach = function WayToEach({title , describtion}){
    console.log(title, describtion);
    return (
      <li>
            <p>
              <strong>{title}</strong> {describtion}
            </p>
      </li>
    )
  }