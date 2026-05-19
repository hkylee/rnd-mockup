"use client";
import * as React from "react";
// page generator 가 자동 주입. nested 된 mol/checkbox-item / all-agree-row 가 useContext 로 자기 id 매칭 후 시각 결정.
export const PageStateContext = React.createContext<Record<string, boolean> | null>(null);
