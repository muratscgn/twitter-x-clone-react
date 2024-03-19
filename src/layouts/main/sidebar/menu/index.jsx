import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { mainMenu } from "../../../../utils/consts";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((menu) => (
        // eslint-disable-next-line react/jsx-key
        <NavLink to={menu.path} className="py-1 block group">
          {({ isActive }) => (
            <div className={classNames("p-3 rounded-full inline-flex items-center gap-5 transition-colors group-hover:bg-[#eff3f41a]", {
              "font-bold": isActive
            })}>
              <div className="w-[26.25px] h-[26.25px] relative">
                {menu?.notification && (
                  <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                    {menu?.notification}
                  </span>
                )}
                {!isActive && menu.icon.passive}
                {isActive && menu.icon.active}
              </div>
              <div className="pr-4 text-xl">
                {menu.title}
              </div>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  )
}