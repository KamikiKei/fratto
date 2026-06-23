import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * @typedef {import("@radix-ui/react-accordion").AccordionItemProps} AccordionItemProps
 * @typedef {import("@radix-ui/react-accordion").AccordionTriggerProps} AccordionTriggerProps
 * @typedef {import("@radix-ui/react-accordion").AccordionContentProps} AccordionContentProps
 */

const Accordion = AccordionPrimitive.Root

/**
 * @type {React.ForwardRefRenderFunction<HTMLDivElement, AccordionItemProps>}
 */
const AccordionItemInner = ({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
)
const AccordionItem = React.forwardRef(AccordionItemInner)
AccordionItem.displayName = "AccordionItem"

/**
 * @type {React.ForwardRefRenderFunction<HTMLButtonElement, AccordionTriggerProps>}
 */
const AccordionTriggerInner = ({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}>
      {children}
      <ChevronDown
        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)
const AccordionTrigger = React.forwardRef(AccordionTriggerInner)
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

/**
 * @type {React.ForwardRefRenderFunction<HTMLDivElement, AccordionContentProps>}
 */
const AccordionContentInner = ({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
)
const AccordionContent = React.forwardRef(AccordionContentInner)
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
