import React from 'react'

export default function HomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-image has-text-centered">
                        <i className="fa fa-paw"></i>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>Energy conservation</h4>
                            <p>Energy conservation is the effort made to reduce the consumption of energy by using less of an energy service. This can be achieved either by using energy more efficiently (using less energy for a constant service) or by reducing the amount of service used (for example, by driving less). Energy conservation is a part of the concept of Eco-sufficiency. Energy conservation measures (ECMs) in buildings reduce the need for energy services and can result in increased environmental quality, national security, personal financial security and higher savings.</p>
                            <p><a href="https://en.wikipedia.org/wiki/Energy_conservation">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                     <div className="card-image has-text-centered">
                        <i className="fa fa-empire"></i>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>Water conservation</h4>
                            <p>Water conservation includes all the policies, strategies and activities to sustainably manage the natural resource of fresh water, to protect the hydrosphere, and to meet the current and future human demand.</p>
                            <p><a href="https://www2.gnb.ca/content/gnb/en/departments/elg/environment/content/water/content/water_conservation.html#:~:text=Conserving%20water%20reduces%20wear%20and,there%20is%20a%20water%20shortage.">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-image has-text-centered">
                        <i className="fa fa-apple"></i>
                    </div>
                     <div className="card-content">
                        <div className="content">
                            <h4>Solar energy</h4>
                            <p>Solar power is the conversion of energy from sunlight into electricity, either directly using photovoltaics, indirectly using concentrated solar power, or a combination. Concentrated solar power systems use lenses or mirrors and solar tracking systems to focus a large area of sunlight into a small beam.</p>
                            <p><a href="https://en.wikipedia.org/wiki/Solar_energy">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
