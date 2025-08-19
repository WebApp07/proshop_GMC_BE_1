import { DollarSign, Truck, ShoppingBag, Headset } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const IconBoxes = () => {
  return (
    <div>
      <Card>
        <CardContent className="grid md:grid-cols-4 gap-4 p-4">
          <div className="space-y-2">
            <Truck />
            <div className="text-sm font-bold">Fast Shipping</div>
            <div className="text-sm text-muted-foreground">
              USA: 20 days | UK: 10 days
            </div>
          </div>
          <div className="space-y-2">
            <DollarSign />
            <div className="text-sm font-bold">Money Back Guarantee</div>
            <div className="text-sm text-muted-foreground">
              Within 30 days of purchase
            </div>
          </div>
          <div className="space-y-2">
            <ShoppingBag />
            <div className="text-sm font-bold">Quality Products</div>
            <div className="text-sm text-muted-foreground">
              Carefully packed and delivered
            </div>
          </div>
          <div className="space-y-2">
            <Headset />
            <div className="text-sm font-bold">24/7 Support</div>
            <div className="text-sm text-muted-foreground">
              Assistance whenever you need
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IconBoxes;
