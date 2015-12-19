package com.redsamurai.view.beans;

import oracle.adf.view.rich.dnd.DnDAction;
import oracle.adf.view.rich.event.DropEvent;
import oracle.adf.view.rich.event.MasonryReorderEvent;

public class Main {
    public Main() {
        super();
    }

    public DnDAction handleDrop(DropEvent dropEvent) {
        // Add event code here...
        return DnDAction.NONE;
    }
}
