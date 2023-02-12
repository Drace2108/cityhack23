import React from "react";
import PropTypes from "prop-types";

// components

export default function MyCharityCardTable({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Startup Company Overview
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}

          <section className="pb-20 bg-blueGray-200 -mt-70">
            <div className="container mx-auto px-4 pt-100">
              <div className="flex flex-wrap">

                <div className="flex flex-wrap items-center mt-32">
                  <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">

                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                      Biome Makers
                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                      Biome Makers is an agriculture tech startup that works to fight climate change through soil-health optimization.
                    </p>
                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                      Their primary products, BeCrop and Gheom, provide tech solutions and data diagnostics to promote sustainability and regenerative agriculture.
                    </p>
                    <button
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Donate
                    </button>
                  </div>

                  <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                      <img
                        src={require("assets/img/biomemakers.jpeg")}
                        className="w-full align-middle rounded-t-lg"
                        alt="Thumbnail"
                      />

                    </div>
                  </div>
                </div>

                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="mb-5">
                        <img src={require("assets/img/charity1.png")} alt="Program 1" style={{
                          maxHeight: 150,
                          alignSelf: 'center'
                        }} />
                      </div>
                      <h6 className="text-xl font-semibold">Union of Concerned Scientists</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        UCS maintains a national network of nearly 17000 scientists who believe “rigorous analysis is the best way to understand the world’s pressing problems and develop effective solutions to them.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 min-h-10 flex-auto">
                      <div className="mb-5">
                        <img src={require("assets/img/charity2.png")} alt="Program 2" style={{
                          maxHeight: 150,
                          alignSelf: 'center'
                        }}
                        />
                      </div>
                      <h6 className="text-xl font-semibold">Environmental Working Group</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        EWG is known for researching and spreading awareness regarding toxic chemicals, sustainable versus exploitative agricultural practices, consumer product safety, and corporate accountability.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:pt-12 pt-6 w-full md:w-4/12  px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <img src={require("assets/img/charity3.jpeg")} alt="Program 3" style={{
                        maxHeight: 150,
                        minHeight: 150,
                        alignSelf: 'center'
                      }}
                      />
                      <h6 className="text-xl font-semibold">Greenpeace Fund</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        Greenpeace has not lost its passionate idealism, maintains its corporate integrity, and still inspires many to urgent, hopeful direct action.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <img src={require("assets/img/charity4.png")} alt="Program 4" style={{
                        maxHeight: 150,
                        alignSelf: 'center'
                      }}
                      />
                      <h6 className="text-xl font-semibold">Friends of the Earth</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        Friends of the Earth describes itself as a “bold and fearless voice for justice and the planet”. Recent campaigns have targeted bee-killing neonicotinoid pesticides, “dirty” tar sands oil extraction, and the environmental devastation of palm oil production.</p>
                    </div>
                  </div>
                </div>

                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 min-h-10 flex-auto">
                      <img src={require("assets/img/charity5.png")} alt="Program 5" style={{
                        maxHeight: 150,
                        minHeight: 150,
                        alignSelf: 'center'
                      }}
                      />
                      <h6 className="text-xl font-semibold">Rainforest Alliance</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        Rainforest Alliance has gained public recognition with their independent certification of common rainforest products, such as chocolate, coffee, bananas, and tea. Producers must meet strict sustainability standards to gain certification.                    </p>
                    </div>
                  </div>
                </div>

                <div className="lg:pt-12 pt-6 w-full md:w-4/12  px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <img src={require("assets/img/charity6.png")} alt="Program 6" style={{
                        maxHeight: 150,
                        alignSelf: 'center'
                      }}
                      />
                      <h6 className="text-xl font-semibold">Earthjustice</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        Earthjustice has become an independent crusade focusing on high-impact, precedent-setting battles. These are dedicated, experienced lawyers taking on the David-and-Goliath fights many of us feel powerless to influence.                     </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </>
  );
}

MyCharityCardTable.defaultProps = {
  color: "light",
};

MyCharityCardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
