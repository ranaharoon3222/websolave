import Counter2 from "@/components/about/Counter2";

/**
 * @typedef {import("@prismicio/client").Content.CounterTwoSectionSlice} CounterTwoSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CounterTwoSectionSlice>} CounterTwoSectionProps
 * @param {CounterTwoSectionProps}
 */
const CounterTwoSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container">
        <div className="row justify-content-center pt-60 md-pt-40">
          <Counter2 slice={slice} />
        </div>
      </div>
    </section>
  );
};

export default CounterTwoSection;
