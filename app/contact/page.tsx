import { DeveloperQr } from "@/components/layout/developer-qr";
import { WhatsAppQr } from "@/components/layout/whatsapp-qr";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPhoneDisplay, getCompanyWebsiteUrl, getDeveloperEmail, siteConfig } from "@/lib/config";

export default function ContactPage() {
  const website = getCompanyWebsiteUrl();
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title="تواصل معنا"
        description="رقم التواصل بكيو آر كود واتصال، وبريد المبرمج كما طُلب."
        demo={false}
      />
      <HonestyNote>
        الدليل العام بلا هاتف وبلا بريد. الرقم أدناه زوّده صاحب المشروع لهذه المنصة. لا بريد مبيعات منشور — لا نختلق صندوقاً.
      </HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">{siteConfig.nameAr}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm leading-7">
          <p>{siteConfig.addressAr}</p>
          <p>{siteConfig.hoursAr}</p>
          <p className="font-medium">واتساب واتصال المبيعات والجودة</p>
          <p dir="ltr">
            <a className="text-copper underline-offset-4 hover:underline" href={`tel:+${siteConfig.salesPhone}`}>
              {formatPhoneDisplay(siteConfig.salesPhone)}
            </a>
          </p>
          <p className="font-medium">المبرمج</p>
          <p dir="ltr">
            <a className="text-copper underline-offset-4 hover:underline" href={`mailto:${getDeveloperEmail()}`}>
              {getDeveloperEmail()}
            </a>
          </p>
          <a href={website} className="text-copper underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
            {siteConfig.websiteLabelAr}
          </a>
        </CardContent>
      </Card>
      <SalesCallBar extra="تواصل — أريد بدء جولة جودة" />
      <WhatsAppQr />
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">{siteConfig.developer.nameAr}</CardTitle>
        </CardHeader>
        <CardContent>
          <DeveloperQr />
        </CardContent>
      </Card>
    </div>
  );
}
