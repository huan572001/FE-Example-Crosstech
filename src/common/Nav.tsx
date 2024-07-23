import "antd/dist/reset.css";
import arrLeft from "@/assets/arrow-left.svg";
import showmore from "@/assets/showmore.svg";
import { Menu as AntMenu, Dropdown } from "antd";
import clsx from "clsx";
import { SwitchNavbar } from "@/components/switch/SwitchNavbar";

const navigation = [
  { name: "Tapos", href: "#", current: false },
  { name: "Wallet", href: "#", current: false },
  { name: "Leaderboard", href: "#", current: false },
  { name: "Shop", href: "#", current: false },
  { name: "More", href: "#", current: false },
];

const moreMenu = (
  <AntMenu>
    <AntMenu.Item key="1">
      <a href="#subitem1">Subitem 1</a>
    </AntMenu.Item>
    <AntMenu.Item key="2">
      <a href="#subitem2">Subitem 2</a>
    </AntMenu.Item>
    <AntMenu.Item key="3">
      <a href="#subitem3">Subitem 3</a>
    </AntMenu.Item>
  </AntMenu>
);

export const Nav = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center justify-start">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
              <img src={arrLeft} alt="logo" />
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) =>
                  item.name === "More" ? (
                    <Dropdown
                      key={item.name}
                      overlay={moreMenu}
                      trigger={["click"]}
                    >
                      <a
                        href={item.href}
                        className="text-gray-300 rounded-md px-3 py-2 text-sm font-medium flex items-center"
                        style={{ color: "#CA5C3B" }}
                      >
                        {item.name}
                        {/* icon showmore */}
                        <img src={showmore} alt="showmore" />
                      </a>
                    </Dropdown>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className={clsx(
                        item.current ? "text-white" : "text-black",
                        "rounded-md px-3 py-2 text-sm font-medium",
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <SwitchNavbar />
          </div>
        </div>
      </div>
    </>
  );
};
