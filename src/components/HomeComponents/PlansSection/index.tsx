import Container from "@/components/Container";
import DescriptionSection from "@/components/DescriptionSection";
import TitleSection from "@/components/TitleSection";
import { CheckIcon } from "lucide-react";

const PlansSection = () => {
  const tiers = [
    {
      name: "STANDARD",
      id: "tier-freelancer",
      href: "#",
      priceMonthly: "$9.99",
      description: "The essentials to provide your best work for clients.",
      features: [
        "24/7 TECH SUPPORT",
        "15 PROJECTS",
        "5GB STORAGE",
        "UNLIMITED USERS",
      ],
      mostPopular: false,
    },
    {
      name: "GOLD",
      id: "tier-startup",
      href: "#",
      priceMonthly: "$17.49",
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "24/7 TECH SUPPORT",
        "15 PROJECTS",
        "5GB STORAGE",
        "UNLIMITED USERS",
      ],
      mostPopular: true,
    },
    {
      name: "PREMIUM",
      id: "tier-enterprise",
      href: "#",
      priceMonthly: "$34.99",
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "24/7 TECH SUPPORT",
        "15 PROJECTS",
        "5GB STORAGE",
        "UNLIMITED USERS",
      ],
      mostPopular: false,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div id="plan">
      <Container>
        <TitleSection title="OUR PLANS" />
        <DescriptionSection>
          YOU CAN CONFIGURE YOUR PRICING TABLE USING THE GRID SYSTEM IN ORDER TO
          MAKE IT RESPONSIVE FOR SMALL DEVICES.
        </DescriptionSection>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 pb-5">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                tierIdx === 0 ? "lg:rounded-r-none" : "",
                tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? "text-app-primary" : "text-gray-900",
                      "text-lg/8 font-semibold"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-app-primary/10 px-2.5 py-1 text-xs/5 font-semibold text-app-primary">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm/6 text-gray-600">
                  {tier.description}
                </p>

                <p className="mt-6 flex items-baseline gap-x-1 ">
                  <span
                    className={`text-4xl font-semibold tracking-tight ${tier.mostPopular ? "text-app-primary" : "text-gray-900"
                      } `}
                  >
                    {tier.priceMonthly}
                  </span>
                  <span
                    className={`text-sm/6 font-semibold ${tier.mostPopular ? "text-app-primary/60" : "text-gray-600"
                      }`}
                  >
                    /month
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm/6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-app-primary"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="flex mt-8 flex-col h-6 px-4 py-3 overflow-hidden group justify-center items-center pt-8">
                <span
                  className={`text-lg cursor-pointer font-medium transform transition-transform duration-200 group-hover:-translate-y-8 ${tier.mostPopular ? "text-app-primary" : "text-gray-900"
                    } font-satisfy`}
                >
                  Buy plan
                </span>
                <span
                  className={`text-lg cursor-pointer font-medium transform transition-transform duration-200 translate-y-7 group-hover:-translate-y-7 ${tier.mostPopular ? "text-app-primary" : "text-gray-900"
                    }  font-satisfy`}
                >
                  Buy plan
                </span>
              </button>
              {/* <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-600 text-white shadow-xs hover:bg-indigo-500"
                    : "text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300",
                  "mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                Buy plan
              </a> */}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PlansSection;
