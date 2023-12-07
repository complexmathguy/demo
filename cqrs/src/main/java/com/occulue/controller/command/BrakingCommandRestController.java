/*******************************************************************************
  Turnstone Biologics Confidential
  
  2018 Turnstone Biologics
  All Rights Reserved.
  
  This file is subject to the terms and conditions defined in
  file 'license.txt', which is part of this source code package.
   
  Contributors :
        Turnstone Biologics - General Release
 ******************************************************************************/
package com.occulue.controller.command;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.concurrent.*;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.occulue.api.*;
import com.occulue.delegate.*;
import com.occulue.entity.*;
import com.occulue.exception.*;
import com.occulue.projector.*;

import com.occulue.controller.*;

/** 
 * Implements Spring Controller command CQRS processing for entity Braking.
 *
 * @author your_name_here
 */
@CrossOrigin
@RestController
@RequestMapping("/Braking")
public class BrakingCommandRestController extends BaseSpringRestController {

    /**
     * Handles create a Braking.  if not key provided, calls create, otherwise calls save
     * @param		Braking	braking
     * @return		CompletableFuture<UUID> 
     */
	@PostMapping("/create")
    public CompletableFuture<UUID> create( @RequestBody(required=true) CreateBrakingCommand command ) {
		CompletableFuture<UUID> completableFuture = null;
		try {       
        	
			completableFuture = BrakingBusinessDelegate.getBrakingInstance().createBraking( command );
        }
        catch( Throwable exc ) {
        	LOGGER.log( Level.WARNING, exc.getMessage(), exc );        	
        }
		
		return completableFuture;
    }

    /**
     * Handles updating a Braking.  if no key provided, calls create, otherwise calls save
     * @param		Braking braking
     * @return		CompletableFuture<Void>
     */
	@PutMapping("/update")
    public CompletableFuture<Void> update( @RequestBody(required=true) RefreshBrakingCommand command ) {
		CompletableFuture<Void> completableFuture = null;
		try {                        	        
			// -----------------------------------------------
			// delegate the RefreshBrakingCommand
			// -----------------------------------------------
			completableFuture = BrakingBusinessDelegate.getBrakingInstance().updateBraking(command);;
	    }
	    catch( Throwable exc ) {
	    	LOGGER.log( Level.WARNING, "BrakingController:update() - successfully update Braking - " + exc.getMessage());        	
	    }		
		
		return completableFuture;
	}
 
    /**
     * Handles deleting a Braking entity
     * @param		command ${class.getDeleteCommandAlias()}
     * @return		CompletableFuture<Void>
     */
    @DeleteMapping("/delete")    
    public CompletableFuture<Void> delete( @RequestParam(required=true) UUID brakingId  ) {
    	CompletableFuture<Void> completableFuture = null;
		CloseBrakingCommand command = new CloseBrakingCommand( brakingId );

    	try {
        	BrakingBusinessDelegate delegate = BrakingBusinessDelegate.getBrakingInstance();

        	completableFuture = delegate.delete( command );
    		LOGGER.log( Level.WARNING, "Successfully deleted Braking with key " + command.getBrakingId() );
        }
        catch( Throwable exc ) {
        	LOGGER.log( Level.WARNING, exc.getMessage() );
        }
        
        return completableFuture;
	}        
	



//************************************************************************    
// Attributes
//************************************************************************
    protected Braking braking = null;
    private static final Logger LOGGER = Logger.getLogger(BrakingCommandRestController.class.getName());
    
}
