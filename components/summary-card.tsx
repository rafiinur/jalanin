import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { type LucideIcon } from "lucide-react";

type SummaryCardProps = {
  title: string;
  icon: LucideIcon; // ini tetap fungsi komponen, bukan JSX
  value: number;
  bgColor: string;
};

const SummaryCard = ({
  title,
  icon: Icon,
  value,
  bgColor,
}: SummaryCardProps) => {
  return (
    <Card className="flex flex-row items-center gap-8 shadow-md">
      <CardHeader>
        <div className={`${bgColor} p-4 rounded-2xl`}>
          <Icon className="size-8 text-white" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{value}</p>
        <span className="text-sm">{title}</span>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
