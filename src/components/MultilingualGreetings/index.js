import {Component} from 'react'
import './index.css'

class MultilingualGreetings extends Component {
  constructor(props) {
    super(props)
    const {languageGreetingsList} = this.props
    this.state = {
      currentImage: languageGreetingsList[0].imageUrl,
      altText: languageGreetingsList[0].imageAltText,
      id: languageGreetingsList[0].id,
      languageGreetingsList,
    }
  }

  onClickChangeLanguage = (newImageUrl, imageAltText, id) => {
    this.setState({currentImage: newImageUrl, altText: imageAltText, id})
  }

  render() {
    const {currentImage, altText, languageGreetingsList, id} = this.state
    return (
      <div className="bg-container">
        <div className="greetings-container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="button-container">
            {languageGreetingsList.map(eachButton => {
              const isactive = eachButton.id === id
              return (
                <li key={eachButton.id}>
                  <button
                    type="button"
                    className={isactive ? 'active-button' : 'inactive-button'}
                    onClick={() =>
                      this.onClickChangeLanguage(
                        eachButton.imageUrl,
                        eachButton.imageAltText,
                        eachButton.id,
                      )
                    }
                  >
                    {eachButton.buttonText}
                  </button>
                </li>
              )
            })}
          </ul>
          <img src={currentImage} alt={altText} className="image" />
        </div>
      </div>
    )
  }
}

export default MultilingualGreetings
