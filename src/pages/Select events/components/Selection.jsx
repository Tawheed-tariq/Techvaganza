import { ToastContainer } from "react-toastify";
import PageLayout from "../../../Components/PageLayout";

export default function Selection({events, selectedEvents, handleEventSelection}) {
    return (
        <PageLayout title={"Select Events"} imgUrl={"/events/visual-cover.jpg"}>
        <div className="bg-background ShadowLarge pb-8">
          <div className="font-playfair text-center md:px-8 pt-8 overflow-visible">
            <p className="font-extrabold text-3xl md:text-5xl textShadow-md font-figtree overflow-visible">
              Select Your Events
            </p>
          </div>
          <form>
            {/* Event List */}
            <div className="md:px-8 py-2 md:py-4">
              <div className="flex flex-col w-full px-4">
                <h3 className="text-primary font-figtree font-bold text-xl md:text-2xl mb-2">
                  Choose from the available events
                </h3>
                <ul>
                  {events.map((event) => (
                    <li key={event.id} className="py-2">
                      <label className="text-black font-kodeMono font-medium text-md">
                        <input
                          type="checkbox"
                          className="mr-2"
                          onChange={() => handleEventSelection(event.name)}
                          checked={selectedEvents.includes(event.name)}
                        />
                        {event.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Selected Events */}
            <div className="md:px-8 py-2 md:py-4">
              <div className="flex flex-col w-full px-4">
                <h3 className="text-primary font-figtree font-bold text-xl md:text-2xl mb-2">
                  Selected Events
                </h3>
                {selectedEvents.length > 0 ? (
                  <ul>
                    {selectedEvents.map((event, index) => (
                      <li
                        key={index}
                        className="py-1 text-black font-kodeMono font-medium text-md"
                      >
                        {event}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-black font-kodeMono font-medium text-md">
                    No events selected yet.
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:px-8 py-2 md:py-4 flex justify-center">
              <button
              //   onClick={handleSubmit}
                className="bg-primary text-secondary font-semibold py-4 px-10 font-kodeMono"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </PageLayout>

    )
}